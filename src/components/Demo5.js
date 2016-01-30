import React, { Component } from 'react';
import { Alert, Button, Panel } from 'react-bootstrap';
import Toolbar from './Toolbar';
import Liberator from './Liberator';
import SourceLink from './SourceLink';
import ReactWrappyText from 'react-wrappy-text';
var fullscreen = require('fullscreen');

require('./../styles/demo5.css');

export default class Demo5 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fullScreen: false,
            fullScreenRequest: false,
            fullScreenError: false,
            text: 'This is Liberator.'
        };

        this.onButtonClick = this.onButtonClick.bind(this);
        this.onFullScreenAttain = this.syncWithFullScreenState.bind(this, true);
        this.onFullScreenRelease = this.syncWithFullScreenState.bind(this, false);
    }

    // button toggles full screen
    onButtonClick() {
        var isOn = !this.state.fullScreen;

        this.setState({
            fullScreenRequest: isOn
        });

        this.initiateFullScreen(isOn);
    }

    initiateFullScreen(isOn) {
        if (isOn) {
            this.fsEmitter.request();
        } else {
            this.fsEmitter.release()
        }
    }

    // we are changing the fullScreen state indirectly (we initiate the full screen and then listen to its changes)
    // this is the more robust way to keep our app in sync with full screen (whichever way the full screen is initiated or terminated)
    syncWithFullScreenState(isOn) {
        console.log('full screen', isOn);
        this.setState({
            fullScreen: isOn
        });
    }

    onFullScreenError(error) {
        this.setState({
            fullScreen: false,
            fullScreenError: true
        });
        console.log('Full screen isn\'t supported by this browser', error);
    }

    componentDidMount() {
        this.fsEmitter = fullscreen(document.body); // just for fun, let's pick another element (and not liberator overlay)
        this.fsEmitter.on('attain', this.onFullScreenAttain);
        this.fsEmitter.on('release', this.onFullScreenRelease);
        this.fsEmitter.on('error', this.onFullScreenError);
    }

    componentWillUnmount() {
        this.fsEmitter.dispose();
    }

    render() {
        var fullScreen = this.state.fullScreen,
            isError = this.state.fullScreenError,
            buttonIcon = fullScreen ?
                <span className="glyphicon glyphicon-star"></span> :
                <span className="glyphicon glyphicon-star-empty"></span>,
            buttonText = fullScreen ? 'Exit full screen' : 'Show full screen',
            panelTitle = fullScreen ? 'This is the panel in full screen mode' : 'This is the panel',

            text = (
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sollicitudin tortor vel sagittis. Nullam sagittis erat quis dolor convallis elementum. Nullam malesuada dapibus scelerisque. Curabitur eu tortor vitae leo gravida euismod. Praesent eget interdum ex. Nam venenatis nisl ipsum, in facilisis ligula dignissim nec. Duis in ante facilisis, interdum quam eget, malesuada purus. Phasellus vel quam convallis, interdum eros nec, malesuada orci. Suspendisse condimentum eget lectus vel semper. Nulla quis sem commodo, euismod purus nec, tincidunt dolor. Nullam ut justo neque. Phasellus lacinia lorem tortor, et rutrum nibh iaculis vel. In eget finibus dolor. Phasellus finibus, leo et sollicitudin tincidunt, eros magna rutrum libero, quis congue magna erat vitae orci.<br/><br/>
                    Proin semper eget mauris eu feugiat. Maecenas condimentum risus nec sem vehicula, quis ultricies velit rutrum. Duis pharetra sodales augue eu facilisis. Nullam tincidunt accumsan laoreet. Ut semper eu felis malesuada cursus. Morbi a ante sed tortor semper imperdiet. Fusce consequat vehicula est, vel feugiat ex feugiat sit amet. Nam tristique, tellus id rhoncus auctor, purus nisi gravida nisl, ut scelerisque massa tortor nec mauris. Donec lobortis, lectus non commodo scelerisque, ante nisi sagittis nisl, at aliquet nulla lacus at quam. Nam a dolor leo. Etiam nibh magna, vehicula nec nulla a, posuere posuere mi. Sed eleifend massa ut risus accumsan, sit amet hendrerit lectus lacinia. Aliquam elementum tempor mi, vel tempus lacus eleifend nec. Aenean mollis tristique lectus, vitae tempus urna scelerisque cursus. Fusce eu pretium purus, quis euismod mi. In hac habitasse platea dictumst.<br/><br/>
                    Vivamus viverra turpis id venenatis dictum. Nunc pharetra leo sed nibh elementum mollis. Cras metus urna, tincidunt a elit sed, bibendum aliquet nulla. Donec tincidunt et neque ac bibendum. Aliquam sit amet sollicitudin lorem. Maecenas vehicula orci vitae sollicitudin pharetra. Proin id eleifend purus. In hac habitasse platea dictumst. Pellentesque at venenatis sapien, eu commodo tortor. Nullam sit amet quam ullamcorper, eleifend eros vitae, commodo metus. Maecenas commodo cursus tellus a mollis. Donec et justo eu erat suscipit mattis. Mauris ut dolor tempus, mollis ipsum sed, sollicitudin ante. Quisque posuere ornare risus, id eleifend velit egestas nec.<br/><br/>
                    Vestibulum volutpat massa at elit condimentum mollis. Cras tristique feugiat quam, sit amet fringilla mi dapibus ac. Curabitur id nisl porta, tincidunt diam quis, sollicitudin lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam a consequat ligula. Donec lacinia sed massa id posuere. Aliquam erat volutpat. In eu ex consequat tellus vulputate gravida. Quisque malesuada congue porta. Duis blandit odio vitae enim tempor iaculis. Donec vitae nulla rutrum, sagittis tortor quis, blandit nulla. Phasellus sed elit interdum, convallis tortor in, semper magna. Sed sit amet venenatis ipsum. Nulla turpis metus, maximus sit amet tellus eget, molestie feugiat sapien.<br/><br/>
                </div>
            ),

            alert = isError ? (
                <Alert bsStyle="danger">
                    <strong>Error: </strong>This platform doesn&#39;t support full screen.
                </Alert>
            ) : null,

            popup = (
                <Panel bsStyle="primary" className="indent-top" header={panelTitle}>
                    {alert}
                    <Button bsStyle="primary" bsSize="large" onClick={this.onButtonClick}>{buttonIcon}&nbsp;{buttonText}</Button><br/><br/>
                    {text}
                </Panel>
            );

        return (
            <div>
                <Alert bsStyle="info">
                    <h3><ReactWrappyText>Demo 5 - Full screen sync</ReactWrappyText></h3><br/>
                    <strong>Click the button to show panel in full screen.</strong><br/><br/>
                    It should be displayed in an overlay.<br/><br/>
                    Its size is kept in sync with a full screen state (maximized when in full screen mode).<br/><br/>
                    <SourceLink>Demo5.js</SourceLink><br/><br/>
                </Alert>
                <Liberator className="full-screen"
                    active={fullScreen}>
                    <div>
                        {popup}
                    </div>
                </Liberator>
            </div>
        );
    }
}