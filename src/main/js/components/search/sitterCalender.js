import AvailableTimes from 'react-available-times';
import React from 'react';
import Button from '@material-ui/core/Button';
import Cookies from 'universal-cookie';
import axios from 'axios';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Dialog from '@material-ui/core/Dialog/Dialog';
import Typograhpy from '@material-ui/core/Typography';

export default class Calender extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            start: new Date(),
            end: new Date(),
            dates: [],
            loaded: true,
            open: false
        };

		axios.get('/api/sitter/get-dates/' + this.props.principal, this.props.principal)
			.then(res => {
				this.setState({
					dates: res,
					loaded: true
				});
			}).catch(error => this.setState({error}));
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render()
    {
        const startD = this.state.start;
        const endD = this.state.end;
        const loaded = this.state.loaded;
        console.log(endD);
        const { dates } = this.state;
        var theArray = [];

		if(dates)
		{dates.forEach(({startDate, endDate}) => {
			theArray.push(
				{start: new Date(startDate), end: new Date(endDate)});
		});
		}


        if (loaded === true) {
            return (
                <div>
                <Button onClick={this.handleClickOpen}>View Availability</Button>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                        fullWidth={true}
                    >
                        <Typograhpy>We recommend that you only request a time that the sitter is available</Typograhpy>
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

                        }}
                        initialSelections={theArray}
                        height={400}
                        recurring={false}
                        availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
                        availableHourRange={{start: 0, end: 24}}
                    />
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            );
        }
        return null;
    }
}