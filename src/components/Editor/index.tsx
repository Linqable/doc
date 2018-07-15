import * as React from "react";
import AceEditor from 'react-ace'
import * as ace from 'brace'
import 'brace/ext/language_tools'
import 'brace/mode/typescript'
import 'brace/mode/javascript'
import 'brace/mode/sh'
import 'brace/mode/html'
import 'brace/theme/tomorrow'
export default (props) => {
    const { id, mode, value, ...rest } = props

    return (
        <AceEditor
            name={id}
            mode={mode}
            theme='tomorrow'
            width='100%'
            height='100px'
            value={value}
            enableBasicAutocompletion
            enableLiveAutocompletion
            editorProps={{ $blockScrolling: Infinity }}
            highlightActiveLine={false}
            maxLines={Infinity}
            showGutter={false}
            showPrintMargin={false}
            tabSize={2}
            {...rest}
        />
    )
};