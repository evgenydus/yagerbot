import React from 'react'
import { observer } from 'mobx-react'
import Attachment from './Attachment'

const AttachmentList = ({ formStore }) => (
  <>
    {formStore.attachments.map(attachment => (
      <Attachment key={attachment.id} attachment={attachment} />
    ))}
  </>
)

export default observer(AttachmentList)
