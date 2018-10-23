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
            loaded: true
        };

        //get for this.props.priciple
    }

    render()
    {
        const startD = this.state.start;
        const endD = this.state.end;
        const loaded = this.state.loaded;
        console.log(endD);

        if (loaded === true) {
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

                    }}
                    onEventsRequested={({calendarId, start, end, callback}) => {
                        //loadMoreEvents(calendarId, start, end).then(callback);
                    }}
                    initialSelections={[
                        {start: startD, end: endD}
                    ]}
                    height={400}
                    recurring={false}
                    availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
                    availableHourRange={{start: 0, end: 24}}
                />
            );
        }
        return null;
    }
}