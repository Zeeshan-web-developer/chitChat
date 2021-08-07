import {useState} from 'react'
import {X, Plus} from 'react-feather'
import {Modal, ModalBody,ModalHeader} from 'reactstrap'
const NoteSection = (props) => {
    const [noteModal,setNoteModal] = useState(false)
    return (
        <li id="notes">
            <div className="notes-main">
            <div className="theme-title">
                <div className="media">
                <div>
                    <h2>Notes</h2>
                    <h4>Notes List</h4>
                </div>
                <div className="media-body media-body text-right"><a className="icon-btn btn-sm btn-outline-light close-apps" href="#" onClick={() => props.smallSideBarToggle()}><X/></a></div>
                </div>
            </div>
            <form className="default-form">
                <div className="form-group notes-content">                    
                <select> 
                    <option>Contact Or Channel</option>
                    <option>Weekdays (Mon-Fri)</option>
                    <option>Daily</option>
                    <option>Weekly (Custom)</option>
                </select>
                <ul>
                    <li>
                        <a className="icon-btn btn-light button-effect btn-sm" onClick={() => setNoteModal(!noteModal)} ><Plus/></a>
                        <Modal isOpen={noteModal} toggle={() => setNoteModal(!noteModal)} className="notes-modal-main add-popup fade show" centered={true}>
                                <ModalHeader toggle={() => setNoteModal(!noteModal)}>
                                    <h2 className="modal-title"><i className="ti-bookmark-alt"></i>notes</h2>
                                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </ModalHeader>
                                <ModalBody className="custom-scroll">
                                    <div className="card">
                                    <div className="card-header">
                                        <h5>Inline Editor</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="cke_editable cke_editable_inline cke_contents_ltr cke_show_borders" id="area1" contenteditable="true" tabindex="0" spellcheck="false" role="textbox" aria-label="Rich Text Editor, area1" title="Rich Text Editor, area1">
                                        <h1>Your title</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate urna, sed dignissim arcu. Aliquam at ligula imperdiet, faucibus ante a, interdum enim. Sed in mauris a lectus lobortis condimentum. Sed in nunc magna. Quisque massa urna, cursus vitae commodo eget, rhoncus nec erat. Sed sapien turpis, elementum sit amet elit vitae, elementum gravida eros.</p>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger button-effect btn-sm" type="button" onClick={() => setNoteModal(!noteModal)}>Save</button>
                                        <button className="btn btn-primary button-effect btn-sm" type="button" onClick={() => setNoteModal(!noteModal)}>Cancel</button>
                                    </div>
                                    </div>
                                </ModalBody>
                        </Modal>
                    </li>
                </ul>
                </div>
            </form>
            <div className="notes-list">
                <h6 className="mb-2 text-muted">Joshephin Water.10 Jan</h6>
                <div className="media"><img className="img-fluid mr-3" src="../assets/images/file_icons/5.png" alt="media-img"/>
                <div className="media-body">
                    <h5 className="mt-0">Joshephin Water</h5>
                </div>
                </div>
                <h5 className="mb-2">Imporatnt project link</h5>
                <h6 className="mb-2">Please start testing task of your projects.</h6>
                <div className="forward-main"><a className="line fa fa-mail-forward" href="#">Forward                         </a></div>
            </div>
            </div>
        </li>
    );
}

export default NoteSection;