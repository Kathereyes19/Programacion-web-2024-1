export default function Button ({ className, onClick, disable }) {
let content;

if (type === 'add') {
    content = '+';
} 
else if (type === 'erase') {
    content = 'x';
}
else if (type === 'clearAll') {
    content = 'Clear';
}

return (
    <div>
        <button className= {`btn-${type}`} onClick={onClick} disable={disable}>
            {content} 
        </button>
    </div>
);
}