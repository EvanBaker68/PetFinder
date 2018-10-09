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
                start: '',
                end: '',
        };

        axios.get('/sitter/get-dates/' + 'emily', 'emily')
            .then(res => {
                this.setState({
                    start: res.startDate,
                    end: res.endDate
                });
                console.log('Start:', this.state.start, 'End:', this.state.end);
            }).catch(error => this.setState({error}));
    }

    render()
    {
        return (
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
                    selections.forEach(({start, end}) => {
                        const cookies = new Cookies();
                        console.log('Start:', start, 'End:', end);
                        const date ={
                            startDate: start,
                            endDate: end,
                            sitterPrinciple: 'emily'
                        };
                        axios.post('/sitter/add-date', date)
                            .then(res => {
                                console.log(res);
                                console.log(res.data);
                            })
                            .catch(error => {
                                console.log(error.response);
                            });
                    });
                }}
                onEventsRequested={({calendarId, start, end, callback}) => {
                    //loadMoreEvents(calendarId, start, end).then(callback);
                }}
                initialSelections={[
                    {start: this.state.startDate, end: this.state.endDate}
                ]}
                height={400}
                recurring={false}
                availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
                availableHourRange={{start: 0, end: 24}}
            />
        );
    }
}