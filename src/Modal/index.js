import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Modal.css'
function Modal({children}){
    return ReactDOM.createPortal(
        <div className="Modal">
            <div>
            {children.comparateList.forEach((element) => {
              <div>
                <p>{element.name} </p>
              </div>;
            console.log(element.name)
            })}
          </div>
        </div>,
        document.getElementById('modal')
    )
}

export {Modal};