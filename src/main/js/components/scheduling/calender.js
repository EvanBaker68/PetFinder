import AvailableTimes from 'react-available-times';
import React from 'react';
import Button from '@material-ui/core/Button';
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
		const cookies = new Cookies();
		var a = Math.random();
		this.state.selectedDates.forEach((date) => {
			// const date = {
			// 	startDate: start,
			// 	endDate: end,
			// 	sitterPrincipal: cookies.get('username'),
			// };
			console.log('startDate: ' + date.startDate);
			console.log('endDate: ' + date.endDate);


			axios.post('/sitter/add-date', date)
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
        console.log(endD);
        var datesList;
        var theArray = [];
        var start;
        var end;


        // {datesList = dates.map(date => {
        //     const { startDate, endDate } = date;
        //     start = startDate;
        //     end = endDate;
        //     console.log(startDate);
        //     console.log(endDate);
        //     }
        //     );}

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
                            console.log('start: ' + start);
                            console.log('end: ', end);
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
                        //loadMoreEvents(calendarId, start, end).then(callback);
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