export interface ResumeItemModel {
  businessName: string;
  position: string;
  years: string;
  description?: {
    simple?: string;
    items?: string[];
  };
}
