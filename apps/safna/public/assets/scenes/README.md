# Scene Assets Status

## Disk space blocked full generation

5 AI images were generated before the disk filled up. They are saved in:

```
C:\Users\Vishnu\.cursor\projects\c-Users-Vishnu-Desktop-AI-Product-Lab-Invitation\assets\
```

| File | Status |
|------|--------|
| scene-01-envelope-closed.png | Generated |
| scene-03-envelope-open.png | Generated |
| scene-04-invitation-open-full.png | Generated |
| scene-05-names-flowers.png | Generated |
| scene-07-verse-calligraphy.png | Generated |
| scene-06-bride-portrait.png | Failed — disk full |
| scene-08 through scene-17 | Failed — disk full |
| gallery-01..12 | Not generated |

## To copy generated images

Free disk space, then run:

```powershell
Copy-Item "C:\Users\Vishnu\.cursor\projects\c-Users-Vishnu-Desktop-AI-Product-Lab-Invitation\assets\scene-*.png" `
  "c:\Users\Vishnu\Desktop\AI_Product_Lab\Invitation\public\assets\scenes\" -Force
```

## Remaining images

Use the prompts in the asset brief (previous chat) or switch to Agent mode after freeing ~2GB disk space to resume generation.

Until then, `src/lib/assets.ts` uses Unsplash fallbacks for missing scenes.
