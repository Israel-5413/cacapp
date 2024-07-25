import { Resource as TResource } from "../api/resource/Resource";

export const RESOURCE_TITLE_FIELD = "file";

export const ResourceTitle = (record: TResource): string => {
  return record.file?.toString() || String(record.id);
};
