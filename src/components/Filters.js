import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import { handleFilter } from "./../actions/todo";
import { connect } from 'react-redux';

const Filters = ({ filter, dispatch }) => {
    const handleBtns = (status) => {
        dispatch(handleFilter(status))
    }
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <ButtonGroup variant="contained" color="primary">
                <Button onClick={() => handleBtns("ALL")} disabled={filter === "ALL"}>All</Button>
                <Button onClick={() => handleBtns("COMPLETED")} disabled={filter === "COMPLETED"}>Completed</Button>
                <Button onClick={() => handleBtns("INCOMPLETE")} disabled={filter === "INCOMPLETE"}>InCompleted</Button>
            </ButtonGroup>
        </Grid>

    );
}

const mapStateToProps = (state) => ({
    filter: state.filter
})

export default connect(mapStateToProps, null)(Filters);