import React from 'react'

function SubTwo(props) {
  console.log(props)
  return (
    <div>
      this should catch both productId/subtwo and productId/subtwo/subproductid
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(props) {
  const { params } = props
  return {
    props: {
      params
    }
  }
}


export default SubTwo
