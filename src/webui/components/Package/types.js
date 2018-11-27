/**
 * @prettier
 * @flow
 */

export interface IProps {
  label?: string;
  version?: string;
  author?: IAuthor;
  description?: string;
  keywords?: array;
  license?: string;
  time: string;
}

interface IAuthor {
  name?: string;
  avatar?: string;
  email?: string;
  url?: string;
}
