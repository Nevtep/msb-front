import gql from 'graphql-tag';

export const UPLOAD_SIGNALS = gql`
mutation UploadSignals($file: Upload!) {
  uploadSignals(file: $file) {
    id
    time
    op
    pair
  }
}
`;
