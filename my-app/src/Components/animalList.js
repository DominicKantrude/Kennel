import React, { Component } from 'react';

class AnimalList extends Component {
    render() {
        return (
            <article>
                <h1>Animal List</h1>
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id}>
                            {animal.name}
                        </div>
                    )
                }
            </article>
        );
    }
}

export default AnimalList