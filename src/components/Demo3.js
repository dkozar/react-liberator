import React, { Component } from 'react';
import { Alert, Button, Panel } from 'react-bootstrap';
import Toolbar from './Toolbar';
import Liberator from './Liberator';

require('./../styles/demo3.css');

export default class Demo3 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fullScreen: false,
            text: 'This is the liberator.'
        };

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.setState({
            fullScreen: !this.state.fullScreen
        });
    }

    render() {
        var fullScreen = this.state.fullScreen,
            buttonIcon = fullScreen ?
                <span className="glyphicon glyphicon-star"></span> :
                <span className="glyphicon glyphicon-star-empty"></span>,
            buttonText = fullScreen ? 'Exit full screen' : 'Show full screen',
            panelTitle = fullScreen ? 'This is the same panel in full screen mode' : 'This is the panel',

            text = (
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue sollicitudin tortor vel sagittis. Nullam sagittis erat quis dolor convallis elementum. Nullam malesuada dapibus scelerisque. Curabitur eu tortor vitae leo gravida euismod. Praesent eget interdum ex. Nam venenatis nisl ipsum, in facilisis ligula dignissim nec. Duis in ante facilisis, interdum quam eget, malesuada purus. Phasellus vel quam convallis, interdum eros nec, malesuada orci. Suspendisse condimentum eget lectus vel semper. Nulla quis sem commodo, euismod purus nec, tincidunt dolor. Nullam ut justo neque. Phasellus lacinia lorem tortor, et rutrum nibh iaculis vel. In eget finibus dolor. Phasellus finibus, leo et sollicitudin tincidunt, eros magna rutrum libero, quis congue magna erat vitae orci.<br/><br/>
                    Proin semper eget mauris eu feugiat. Maecenas condimentum risus nec sem vehicula, quis ultricies velit rutrum. Duis pharetra sodales augue eu facilisis. Nullam tincidunt accumsan laoreet. Ut semper eu felis malesuada cursus. Morbi a ante sed tortor semper imperdiet. Fusce consequat vehicula est, vel feugiat ex feugiat sit amet. Nam tristique, tellus id rhoncus auctor, purus nisi gravida nisl, ut scelerisque massa tortor nec mauris. Donec lobortis, lectus non commodo scelerisque, ante nisi sagittis nisl, at aliquet nulla lacus at quam. Nam a dolor leo. Etiam nibh magna, vehicula nec nulla a, posuere posuere mi. Sed eleifend massa ut risus accumsan, sit amet hendrerit lectus lacinia. Aliquam elementum tempor mi, vel tempus lacus eleifend nec. Aenean mollis tristique lectus, vitae tempus urna scelerisque cursus. Fusce eu pretium purus, quis euismod mi. In hac habitasse platea dictumst.<br/><br/>
                    Vivamus viverra turpis id venenatis dictum. Nunc pharetra leo sed nibh elementum mollis. Cras metus urna, tincidunt a elit sed, bibendum aliquet nulla. Donec tincidunt et neque ac bibendum. Aliquam sit amet sollicitudin lorem. Maecenas vehicula orci vitae sollicitudin pharetra. Proin id eleifend purus. In hac habitasse platea dictumst. Pellentesque at venenatis sapien, eu commodo tortor. Nullam sit amet quam ullamcorper, eleifend eros vitae, commodo metus. Maecenas commodo cursus tellus a mollis. Donec et justo eu erat suscipit mattis. Mauris ut dolor tempus, mollis ipsum sed, sollicitudin ante. Quisque posuere ornare risus, id eleifend velit egestas nec.<br/><br/>
                    Vestibulum volutpat massa at elit condimentum mollis. Cras tristique feugiat quam, sit amet fringilla mi dapibus ac. Curabitur id nisl porta, tincidunt diam quis, sollicitudin lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam a consequat ligula. Donec lacinia sed massa id posuere. Aliquam erat volutpat. In eu ex consequat tellus vulputate gravida. Quisque malesuada congue porta. Duis blandit odio vitae enim tempor iaculis. Donec vitae nulla rutrum, sagittis tortor quis, blandit nulla. Phasellus sed elit interdum, convallis tortor in, semper magna. Sed sit amet venenatis ipsum. Nulla turpis metus, maximus sit amet tellus eget, molestie feugiat sapien.<br/><br/>
                </div>
            ),

            popup = (
                <Panel bsStyle="primary" className="indent-top" header={panelTitle}>
                    {text}
                    <Button bsStyle="primary" bsSize="large" onClick={this.onButtonClick}>{buttonIcon}&nbsp;{buttonText}</Button>
                </Panel>
            );

        if (fullScreen) {
            popup = fullScreen ? (
                <Liberator className="full-screen">
                    <div>
                        {popup}
                    </div>
                </Liberator>
            ) : null;
        }

        return (
            <div>
                <Alert bsStyle="info">
                    <h3>Demo 3 - Full screen</h3><br/>
                    <strong>Click the button to show panel in full screen.</strong><br/><br/>It should be displayed in an overlay.<br/><br/>
                </Alert>
                <div>
                    {popup}
                </div>
            </div>
        );
    }
}