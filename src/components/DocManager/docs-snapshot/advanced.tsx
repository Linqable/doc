import * as React from "react";
import { Segment, Header } from "semantic-ui-react";
import CodeExample from "../../CodeExample";
import { Component } from "react";
import AdvancedExamples from './codeExamples/advancedExamples';

export default class AdvanedApi extends Component {
    render() {
        return (
            <Segment basic padded>
                <Header as='h2'>
                    Advanced API
                </Header>
                <CodeExample language="TypeScript"  title="Transpose" src={AdvancedExamples.Transpose}
                    desc="Transposes the rows of a sequence into columns." />
                <CodeExample language="TypeScript"  title="Evaluate" src={AdvancedExamples.Evaluate}
                    desc="Returns a sequence containing the values resulting from invoking (in order) each function in the source sequence of functions." />
                <CodeExample language="TypeScript"  title="Acquire" src={AdvancedExamples.Acquire}
                    desc="Ensures that a source sequence of objects are all acquired successfully. If the acquisition of any one fails then those successfully acquired till that point are delete" />
                <CodeExample language="TypeScript"  title="Consume" src={AdvancedExamples.Consume}
                    desc="Completely consumes the given sequence. This method uses immediate execution, and doesn't store any data during execution" />
                <CodeExample language="TypeScript"  title="Batch" src={AdvancedExamples.Batch}
                    desc="Batches the source sequence into sized buckets." />
                <CodeExample language="TypeScript"  title="MaxBy" src={AdvancedExamples.MaxBy}
                    desc="Returns the maxima (maximal elements) of the given sequence, based on the given projection." />
                <CodeExample language="TypeScript"  title="MinBy" src={AdvancedExamples.MinBy}
                    desc="Returns the minima (minimal elements) of the given sequence, based on the given projection." />
                <CodeExample language="TypeScript"  title="Exclude" src={AdvancedExamples.Exclude}
                    desc="Excludes elements from a sequence starting at a given index" />
                <CodeExample language="TypeScript"  title="Flatten" src={AdvancedExamples.Flatten}
                    desc="Flattens a sequence containing arbitrarily-nested sequences." />
                <CodeExample language="TypeScript"  title="Pairwise" src={AdvancedExamples.Pairwise}
                    desc="Returns a sequence resulting from applying a function to each element in the source sequence and its predecessor, with the exception of the first element which is only returned as the predecessor of the second element." />
                <CodeExample language="TypeScript"  title="Pipe" src={AdvancedExamples.Pipe}
                    desc="Executes the given action on each element in the source sequence and yields it." />
                <CodeExample language="TypeScript"  title="Lag" src={AdvancedExamples.Lag}
                    desc="Produces a projection of a sequence by evaluating pairs of elements separated by a negative offset." />
            </Segment>
        );
    }
}