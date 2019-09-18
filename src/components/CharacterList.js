import React from 'react';
import {connect} from "react-redux";

class CharacterList extends React.Component {
    
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                }}
            >
                <aside>
                    <h1>Breaking Bad Characters</h1>
                    <div>
                        {/* Breaking Bad Characters Here */}
                    </div>
                </aside>
                <aside>
                    <h1>Star Wars Characters</h1>
                    <div>
                        {/* Star Wars Characters Here */}
                    </div>
                </aside>
            </div>
        )
    }
}

export default CharacterList;