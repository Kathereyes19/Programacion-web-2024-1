export function Button ({ className, onClick, disabled }) {
    let content;
    
    if (className === 'add') {
        content = '+';
    } 
    else if (className === 'erase') {
        content = 'x';
    }
    else if (className === 'clearAll') {
        content = 'Clear';
    }
    
    return (
        <div>
            <button className={`btn-${className}`} onClick={onClick} disabled={disabled}>
                {content} 
            </button>
        </div>
    );
}
