import React from 'react';

export default class RubricsPage extends React.Component {
    static path = '/rubrics';

    componentWillMount() {
        console.log( this.props );
    }

    render() {
        return (
            <div>
                <h1>Рубрики</h1>
            </div>
        );
    }
}
