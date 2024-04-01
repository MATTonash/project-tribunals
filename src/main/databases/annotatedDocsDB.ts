import PouchDB from 'pouchdb'
import { AnnotatedDocument, RevTag } from '../../common/types'

console.log('Initialising AnnotatedDocs Database...')
const annotatedDocs = new PouchDB('data/annotatedDocs')
annotatedDocs.info().then((info) => {
  console.log('AnnotatedDocs Database initialised!')
  console.log(info)
})

function putAnnotatedDocument(annotatedDoc: AnnotatedDocument): Promise<void> {
  return annotatedDocs
    .put(annotatedDoc)
    .then(() => {
      console.log('Annotated Document put successfully:', annotatedDoc._id, annotatedDoc.name)
    })
    .catch((error) => {
      console.error('Error putting document:', error)
    })
}

function getAnnotatedDocument(annotatedDocId: string): Promise<AnnotatedDocument & RevTag> {
  return annotatedDocs
    .get(annotatedDocId)
    .then((annotatedDoc) => {
      return annotatedDoc as AnnotatedDocument & RevTag
    })
    .catch((error) => {
      console.error('Error getting document:', error)
      throw error
    })
}

function removeAnnotatedDocument(annotatedDoc: AnnotatedDocument & RevTag): Promise<void> {
  return annotatedDocs
    .remove(annotatedDoc)
    .then(() => {
      console.log('Document removed successfully:', annotatedDoc._id, annotatedDoc.name)
    })
    .catch((error) => {
      console.error('Error removing document:', error)
    })
}

export { putAnnotatedDocument, getAnnotatedDocument, removeAnnotatedDocument }
