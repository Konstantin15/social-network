import React, {useState, useEffect} from 'react';


const ProfileStatusWithHooks = props => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);


    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status)
    };

    const onChangeStatus = (e) => {
        setStatus(e.target.value)
    };

        return (
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={ activateEditMode }>{props.status || '-----'}</span>
                    </div>}
                {editMode &&
                    <div>
                        <input onChange={ onChangeStatus } autoFocus onBlur={ deactivateEditMode } value={status}/>
                    </div>}
            </div>
        )
    };

export default ProfileStatusWithHooks;