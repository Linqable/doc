import * as React from "react";
import { Segment, Header } from "semantic-ui-react";
import CodeExample from "../../CodeExample";
import { Component } from 'react';
import StandardExamples from './codeExamples/standardExamples';

export default class StandardApi extends Component {
    render() {
        return (
            <Segment basic padded>
                <Header as='h2'>
                    Standard API
                </Header>
                <CodeExample language="TypeScript" title="FirstOrDefault" src={StandardExamples.FirstorDefault}
                    desc="Returns the first element of a sequence." info="Non-default support." />
                <CodeExample language="TypeScript"  title="LastOrDefault" src={StandardExamples.FirstorDefault}
                    desc="Returns the last element of a sequence." info="Non-default support." />
                <CodeExample language="TypeScript"  title="SingleOrDefault" src={StandardExamples.SingleOrDefault}
                    desc="Returns the only element of a sequence, and throws an exception if there is not exactly one element in the sequence." info="Non-default support." />
                <CodeExample language="TypeScript"  title="Select" src={StandardExamples.Select}
                    desc="Projects each element of a sequence into a new form." />
                <CodeExample language="TypeScript"  title="Where" src={StandardExamples.Where}
                    desc="Filters a sequence of values based on a predicate." />
                <CodeExample language="TypeScript"  title="Any" src={StandardExamples.Any}
                    desc="Determines whether any element of a sequence exists or satisfies a condition." />
                <CodeExample language="TypeScript"  title="All" src={StandardExamples.All}
                    desc="Determines whether all elements of a sequence satisfy a condition." />
                <CodeExample language="TypeScript"  title="Sum" src={StandardExamples.Sum}
                    desc="Computes the sum of the sequence of Decimal values that are obtained by invoking a transform function on each element of the input sequence." />
                <CodeExample language="TypeScript"  title="IsEmpty" src={StandardExamples.IsEmpty}
                    desc="Gets a value indicating whether this array contains no elemets." />
                <CodeExample language="TypeScript"  title="Min" src={StandardExamples.Min}
                    desc="Invokes a transform function on each element of a sequence and returns the minimum number value." />
                <CodeExample language="TypeScript"  title="Max" src={StandardExamples.Max}
                    desc="Invokes a transform function on each element of a sequence and returns the maximum number value." />
                <CodeExample language="TypeScript"  title="Take" src={StandardExamples.Take}
                    desc="Returns a specified number of contiguous elements from the start of a sequence." />
                <CodeExample language="TypeScript"  title="OrderBy" src={StandardExamples.OrderBy}
                    desc="Sorts the elements of a sequence in a particular direction (ascending, descending) according to a key." info={["Supports primitives, including Date.", <br />, "As well support Descending."]} />
                <CodeExample language="TypeScript"  title="Reverse" src={StandardExamples.Reverse}
                    desc="Inverts the order of the elements in a sequence." />
                <CodeExample language="TypeScript"  title="Distinct" src={StandardExamples.Distinct}
                    desc="Returns distinct elements from a sequence by using the default equality comparer to compare values." />
                <CodeExample language="TypeScript"  title="Union" src={StandardExamples.Union}
                    desc="Produces the set union of two sequences." />
                <CodeExample language="TypeScript"  title="Zip" src={StandardExamples.Zip}
                    desc="Applies a specified function to the corresponding elements of two sequences, producing a sequence of the results." />
            </Segment>
        );
    }
}