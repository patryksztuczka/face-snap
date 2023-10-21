export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      pictures: {
        Row: {
          base64_image: string | null;
          created_at: string;
          id: string;
          user_id: string | null;
        };
        Insert: {
          base64_image?: string | null;
          created_at?: string;
          id?: string;
          user_id?: string | null;
        };
        Update: {
          base64_image?: string | null;
          created_at?: string;
          id?: string;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'pictures_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
