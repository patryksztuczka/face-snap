export interface IDocumentCardProps {
  document: IDocument;
  pickImage: () => void;
  goToCamera: () => void;
}

export interface IDocument {
  id: number;
  title: string;
  subtitle: string;
}
