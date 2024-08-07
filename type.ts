export interface JobPost {
    data: any;
    id: string;
    title: string;
    description: string;
    responsibilities: string;
    requirements: string;
    idealCandidate: string;
    categories: string[];
    opType: string;
    startDate: string;
    endDate: string;
    deadline: string;
    location: string[];
    requiredSkills: string[];
    whenAndWhere: string;
    ordId: string;
    datePosted: string;
    status: string;
    applicantsCount: number;
    viewsCount: number;
    orgName: string;
    logoUrl: string;
    isBookmarked: boolean;
    isRolling: boolean;
    questions: string[];
    perksAndBenefits: string;
    orgPrimaryPhone: string;
    orgEmail: string;
    average_rating: number;
    total_reviews: number;
  }
  
  export interface JobPosting {
    success: boolean;
    message: string;
    data: JobPost[];
    errors: string[];
    count: number;
  }
  
  export interface JobPostById {
    success: boolean;
    message: string;
    data: JobPost;
    errors: string[];
    count: number;
  }