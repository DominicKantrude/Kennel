import React, { Component } from 'react';

class LocationList extends Component {
    render() {
        return (
            <article>
                <h1>Location List</h1>
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            {location.name} Address: {location.address}
                        </div>
                    )
                }
            </article>
        );
    }
}

export default LocationList