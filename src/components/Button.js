import * as React from "react";


export default class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={'button'}>
                <div className={'inner-border'}>
                    <div className={'circle'}/>
                    <div className={'text'}>BUTTON</div>
                    <div className={'circle'}/>
                </div>
            </div>
        );
    }
}