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
        axios.get('/sitter/get-dates/' + cookies.get('username'), cookies.get('username'))
            .then(res => {
                console.log(res);
                this.setState({
                    dates: res,
                    loaded: true
                });
                console.log('Start:', this.state.start, 'End:', this.state.end);
            }).catch(error => this.setState({error}));
    }

    onSave = () => {
		const cookies = new Cookies();

		var a = Math.random();
		this.state.selectedDates.forEach(({start, end}) => {
			const date = {
				startDate: start,
				endDate: end,
				sitterPrincipal: cookies.get('username'),
			};

			axios.post('/sitter/add-date', date)
				.then(res => {
					console.log('Posting new dates');
					console.log(res);
					console.log(res.data);
				})
				.catch(error => {
					console.log(error.response);
				});
		});
		// this.state.dates.forEach((date) => {
		// 	date.deleted = true;
		// 	// console.log(date);
		//
		// 	console.log('deleting old dates');
		// 	axios.post('/sitter/add-date', date)
		// 		.then(res => {
		// 			console.log(res);
		// 			console.log(res.data);
		// 		})
		// 		.catch(error => {
		// 			console.log(error.response);
		// 		});
		// });
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
			console.log('DAFSHKDASJKFDSLA;', new Date(startDate));
			console.log('SAKSAKASKSAKAS', endDate);
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
                        this.setState({
                            selectedDates: selections
                        });
                        selections.forEach(({start, end}) => {
                            const cookies = new Cookies();
                            console.log('Start:', start, 'End:', end);
                            const date = {
                                startDate: start,
                                endDate: end,
                                sitterPrincipal: cookies.get('username'),
                                id: cookies.get('id')
                            };

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
        }
        return null;
    }
}