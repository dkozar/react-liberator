import React, { Component } from 'react';
import { Alert, Button, Panel } from 'react-bootstrap';
import Toolbar from './Toolbar';
import Liberator from './Liberator';
import SourceLink from './SourceLink';
import ReactWrappyText from 'react-wrappy-text';

require('./../styles/demo4.css');

export default class Demo4 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            maximized: false,
            text: 'This is Liberator.'
        };

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    // button toggles maximized screen
    onButtonClick() {
        this.setState({
            maximized: !this.state.maximized
        });
    }

    render() {
        var maximized = this.state.maximized,
            buttonIcon = maximized ?
                <span className="glyphicon glyphicon-star"></span> :
                <span className="glyphicon glyphicon-star-empty"></span>,
            buttonText = maximized ? 'Minimize' : 'Maximize',
            panelTitle = maximized ? 'This is the maximized panel' : 'This is the panel',

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
                    <Button bsStyle="primary" bsSize="large" onClick={this.onButtonClick}>{buttonIcon}&nbsp;{buttonText}</Button><br/><br/>
                    {text}
                </Panel>
            );

        return (
            <div>
                <Alert bsStyle="success">
                    <h3><ReactWrappyText>Demo 4 - Maximized popup</ReactWrappyText></h3><br/>
                    <strong>Click the button to show the panel maximized.</strong><br/><br/>
                    It should be displayed in an overlay.<br/><br/>
                    Panel is being maximized using styles (see demo4.css).<br/><br/>
                    <SourceLink>Demo4.js</SourceLink><br/><br/>
                </Alert>
                <Liberator className="full-screen"
                    active={maximized}>
                    <div>
                        {popup}
                    </div>
                </Liberator>
            </div>
        );
    }
}