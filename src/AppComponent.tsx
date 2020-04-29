import {FunctionComponent} from 'react';
import * as React from 'react';
import {TestComponent} from './TestComponent';

export const AppComponent: FunctionComponent<{}> = (props) => {
    return (
        <div className="App">
            <TestComponent
                model={null}
            />
        </div>
    );
};