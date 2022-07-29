import Button from './Button';

const Header = ({showForm, onShowForm}) => {
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button color = {showForm? 'red': 'green'} text = {showForm? 'Close' : 'Add'} onClick={onShowForm}/>
        </header>
    )
}



export default Header;