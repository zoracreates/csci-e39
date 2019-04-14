
import React from 'react'
import Section from './Section'

function Members({ students, self }) {
    return (<Section title='Candy Lovers' styleName='chat-members'>
        <ul className="memberUL">
            {students.map(({ id, name }) =>
                <li key={id} className={(id === self.id) && "self"}><span>{name}</span> </li>
            )}
        </ul>
    </Section>
    )
}
export default Members
