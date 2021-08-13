import React from 'react'

function SubOne(props) {
  console.log(props)
  return (
    <div>
      this should catch both productId/subone and productId/subone/subproductid
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


export default SubOne
