import Router from 'next/router';
import { Container, Divider } from 'semantic-ui-react'
import { join } from 'path';

export default (props) => {
  const title = props.title ? props.title : 'Reactémon.'
  const titleElement =
    <div className="pokemon">
      {
        props.isHome || props.title ?
          title
          :
          <span style={{ cursor: 'pointer' }} onClick={() => Router.push('/')}>
            {title}
          </span>
      }
    </div>

  return (
    <>
      <div className="header-main">
        <Container>
          <div className="header-row">
            {titleElement}
            <div className="header-right">
              {
                props.isHome ?
                  'JOIN NOW'
                  : <span onClick={() => Router.push('/')}>HOME</span>
              }
            </div>
          </div>
        </Container>
      </div>
      <Divider style={{ marginTop: 0, marginBottom: '3rem' }} />
    </>
  )
};