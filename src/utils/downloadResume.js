import { personalInfo } from '../data/portfolioData';

export const RESUME_FILENAME = 'Saurav_Rauthan_Resume.pdf';

export async function downloadResume(event) {
  event?.preventDefault();

  const response = await fetch(personalInfo.resumeUrl);
  if (!response.ok) {
    window.open(personalInfo.resumeUrl, '_blank', 'noopener,noreferrer');
    return;
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = RESUME_FILENAME;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
}
