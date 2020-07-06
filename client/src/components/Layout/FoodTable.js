import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import Grid from '@material-ui/core/Grid';


// ***Created styles used in FoodTable return***
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));



// ***Function for table navigation***
function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};



// ***Data display function***
function createData(food, amount, time, date) {
    return { food, amount, time, date };
}

// ***Example Info (Hardcoded)***
const rows = [
    createData('Formula', "6oz", "10:30am", "07-05-2020"),
    createData('Formula', "4oz", "09:30am", "07-05-2020"),
    createData('Breast Milk', "6oz", "08:30am", "07-05-2020"),
    createData('Puree', "4oz", "07:30am", "07-05-2020"),
    createData('Solid', "5oz", "10:30pm", "07-04-2020"),
    createData('Formula', "6oz", "09:30pm", "07-04-2020"),
    createData('Puree', "4oz", "08:30pm", "07-04-2020"),
    createData('Puree', "5oz", "07:30pm", "07-04-2020"),
    createData('Breast Milk', "6oz", "06:30pm", "07-04-2020"),
    createData('Breast Milk', "4oz", "12:30am", "07-03-2020"),
    createData('Breast Milk', "5oz", "11:30pm", "07-03-2020"),
    createData('Solid', "4oz", "10:30pm", "07-03-2020"),
    createData('Formula', "4oz", "09:30pm", "07-03-2020"),
].sort((a, b) => (a.date > b.date ? -1 : 1));


// ***Style used below in FoodTable return***
const useStyles2 = makeStyles({
    table: {
        minWidth: 500,
    },
});

function FoodTable() {
    const classes = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Grid container spacing={3} direction="column" alignItems="center">
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Type of Food</StyledTableCell>
                                <StyledTableCell align="right">Amount</StyledTableCell>
                                <StyledTableCell align="right">Time</StyledTableCell>
                                <StyledTableCell align="right">Date</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : rows
                            ).map((row) => (
                                <StyledTableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.food}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        {row.amount}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        {row.time}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        {row.date}
                                    </TableCell>
                                </StyledTableRow>
                            ))}

                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={3}
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: { 'aria-label': 'rows per page' },
                                        native: true,
                                    }}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}
export default FoodTable;