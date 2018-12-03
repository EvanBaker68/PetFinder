import AvailableTimes from 'react-available-times';
import React from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

export default class Calender extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            start: new Date(),
            end: new Date(),
            dates: [],
            selectedDates: [],
            loaded: false
        };

        const cookies = new Cookies();

		axios.get('/api/sitter/get-dates/' + cookies.get('username'), cookies.get('username'))
            .then(res => {
				this.setState({
                    dates: res,
                    loaded: true
                });
            }).catch(error => this.setState({error}));
    }

    onSave = () => {
		var a = Math.random();
		this.state.selectedDates.forEach((date) => {
			axios.post('/api/sitter/add-date', date)
                    .then(res => {
                        console.log('Posting new dates');
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
		});

    }

    render()
    {
		const { dates } = this.state;
        const startD = this.state.start;
        const endD = this.state.end;
        const loaded = this.state.loaded;

        var datesList;
        var theArray = [];
        var start;
        var end;

		if(dates)
		{dates.forEach(({startDate, endDate}) => {
		    theArray.push(
		        {start: new Date(startDate), end: new Date(endDate)});
			});
		}

        if (loaded === true) {
            return (
                <div>
                <AvailableTimes
                    weekStartsOn="monday"
                    calendars={[
                        {
                            id: 'work',
                            title: 'Work',
                            foregroundColor: '#ff00ff',
                            backgroundColor: '#f0f0f0',
                            selected: true,
                        },
                        {
                            id: 'private',
                            title: 'My private cal',
                            foregroundColor: '#666',
                            backgroundColor: '#f3f3f3',
                        },
                    ]}
                    onChange={(selections) => {

                        let array = [];
                        selections.forEach(({start, end}) => {
                            const cookies = new Cookies();
                            const date = {
                                startDate: start,
                                endDate: end,
                                sitterPrincipal: cookies.get('username')
                            };
                            array.push(date);
                        });
						this.setState({
							selectedDates: array,
						});
                    }}
                    onEventsRequested={({calendarId, start, end, callback}) => {

                    }}
                    initialSelections={theArray
                    }
                    height={400}
                    recurring={false}
                    availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
                    availableHourRange={{start: 0, end: 24}}
                />
                    <button onClick={this.onSave}>
						Save
					</button>
                </div>
            );
        } else {
            return (null);
        }
    }
}