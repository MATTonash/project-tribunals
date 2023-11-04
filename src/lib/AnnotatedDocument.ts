// Wasn't sure if I should just define a type or
// Should we have a class for an AnnotatedDocument storing all its tasks?
// Or should we just define a type with a key and have only functions read and write
// everything from a database?
// There's really no other methods I can think of that we need from the AnnotatedDocument

// If we do the first approach, we should make a separate class for the DocumentListing
// As it is a waste of performance to load all the tasks for the document listing on the main menu
type AnnotatedDocument = {
  name: string;
  caseId: string;
  key: string;
};

export default AnnotatedDocument;
