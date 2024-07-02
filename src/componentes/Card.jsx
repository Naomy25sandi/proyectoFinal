import React from 'react'

const Card = ({img,descripcion}) => {
  return (
    <>
    <box maxwidth="240px">
      <card>
        <flex gap={3} align="center">
          <avatar
            size={3}
            src={img}
            radius="full"
            fallback="T"
          >
            <box>
              <text as="div" size={2} weight="bold">
                Teodros
              </text>
              <text as="div" size={2} color="gray">
                Engineering
              </text>
            </box>
          </avatar>
        </flex>
      </card>
    </box>
    
  </>
  )
}

export default Card

