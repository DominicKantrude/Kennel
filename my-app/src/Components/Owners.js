import React, { Component } from 'react';

class OwnersList extends Component {
    render() {
        return (

            <article>
                <h1>Owner List</h1>
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id}>
                            {owner.name}
                            <button onClick={() => this.props.deleteOwner(owner.id)}>Button</button>
                        </div>
                    )
                }
            </article>

        );
    }
}
export default OwnersList