import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save'

class BugList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bugs: '',
            isBug: false,
            allBugs: [],
            isError: false
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ bugs: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.bugs !== '') {
            this.setState({ allBugs: this.state.allBugs.concat(this.state.bugs) });
            this.setState({ isError: false });
        }
        else
            this.setState({ isError: true });

        if (this.state.allBugs.length !== null)
            this.setState({ isBug: true });
        
        this.setState({ bugs: '' });
    }

    DeleteBug(props) {
        this.setState({ allBugs: this.state.allBugs.slice(0, props).concat(this.state.allBugs.slice(props + 1, this.state.allBugs.length)) });
    }

    render() {
        const tableStyle = {
            marginTop: '30px',
        }

        const listBugs = this.state.allBugs.map((bugData, i) =>    
            <tr>
                <td key={i}>
                    {bugData}
                </td>
                <td>
                    <button onClick={() => this.DeleteBug(i)}>
                        Resolved
                    </button>
                </td>
            </tr>    
        );

        return (
            <FormControl fullwidth variant='outlined'>
                <InputLabel htmlFor='outlined-adornment-amount'>Bug</InputLabel>
                <OutlinedInput
                    id='outlined-adornment-amount'
                    value={this.state.bugs}
                    onChange={this.handleChange}
                    labelWidth={30}
                />
                <Button
                    variant='contained'
                    color='primary'
                    size='large'
                    startIcon={<SaveIcon />}
                    onClick={this.handleSubmit}
                >
                    Save
                </Button>

                {this.state.isBug ? 
                    <div>
                        <table style={tableStyle}>
                            <tr>
                                <th>Bug</th>
                                <th>Status</th>
                            </tr>
                            {listBugs}
                        </table>
                    </div>
                : null}

                {this.state.isError ? 
                    <p>Invalid Entry Must Enter Something</p>
                : null}
            
            </FormControl>
        );
    }
}

export default BugList;