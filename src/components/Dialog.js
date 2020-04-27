import React, { useRef } from 'react'

const Dialog = ({ open, onClose, children }) => {
    const dialog = useRef();
    const handleClose = ({ clientX, clientY }) => {
        const { x, y, width, height } = dialog.current.getBoundingClientRect();
        const offsetX = clientX < x || clientX > x + width;
        const offsetY = clientY < y || clientY > y + height;

        if(offsetX || offsetY) {
            onClose();
        }
    }
    return (<div className={`blur ${open ? 'show' : ''}`} onClick={handleClose}>
    <div className="dialog" ref={dialog}>
        {children}
    </div>
</div>)
}

export default Dialog
