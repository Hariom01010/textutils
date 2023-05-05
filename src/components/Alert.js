import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div style={{height:"60px"}} class={`alert alert-${(props.alert.type).toLowerCase()} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}!</strong> {props.alert.msg}
    </div>
  )
}
