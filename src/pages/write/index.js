import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';

class Write extends PureComponent {
  render() {
    const { loginState } = this.props;
    if (loginState) {
      return (
        <Editor
          apiKey="0j4vq0ephv6mtovwn2aylwsey1j54a2v9z2mjas7hnza03ng"
          initialValue="<p>This is the initial content of the editor</p>"
          init={{
            height:'400px',
            width:'800px',
            language:'zh_CN',
            language_url:'https://gitee.com/AnsenJ/Static/raw/master/zh_CN.js',
            plugins: 'link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
            images_upload_url: 'postAcceptor.php',
            automatic_uploads: false
          }}
        />

      )
    } else {
      return <Redirect to="/login" />
    }
  }
}

const mapState = (state) => ({
  loginState: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Write);