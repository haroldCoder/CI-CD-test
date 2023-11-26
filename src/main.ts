import './style.css';
import { setupCounter } from './counter.ts';

async function uploadFile() {
  const fileInput = document.getElementById('fileInput') as HTMLInputElement;
  const file = fileInput.files?.[0];

  if (!file) {
    alert('Please select a file.');
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch('http://localhost:1500', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
    } else {
      alert(`Error: ${data.error}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Asigna la función a window con el nombre updateFile
window.updateFile = async () => await uploadFile();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <form>
    <input type="file" name="file" id="fileInput">
    <button type="button" onclick="updateFile()">Upload</button>
  </form>
`;