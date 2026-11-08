export interface VoteItem {
  placeId: string;
  placeTitle: string;
  category: string;
  thumbnailUrl: string;
  voteCount: number;
  isVoted: boolean;
}

export interface Comment {
  id: string;
  userName: string;
  userAvatar?: string;
  content: string;
  createdAt: string;
}