import React from 'react'

function ProductPage(props) {
  return (
    <div>
      {props.productId}
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
      productId: params.productId
    }
  }
}

export default ProductPage
