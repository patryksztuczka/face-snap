export interface IDocumentCardProps {
  document: IDocument;
  pickImage: () => void;
}

export interface IDocument {
  id: number;
  title: string;
  subtitle: string;
}
