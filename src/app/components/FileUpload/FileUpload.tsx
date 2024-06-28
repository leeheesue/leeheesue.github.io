/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useState } from 'react';
import { useDropzone, FileRejection, FileWithPath } from 'react-dropzone';

import styled from '@emotion/styled';

import { IconClose } from '@/components/Icon';
import Portal from '@/components/Portal/Portal';
import { COLORS } from '@/shared/constants';

import AlertDialog from '../Alert/AlertDialog';
import LayerPopup from '../LayerPopup/LayerPopup';

interface FileUploadProps extends React.ComponentPropsWithoutRef<'div'> {
  files: FileWithPath[];
  labelID: string;
  colorTheme: 'tour' | 'ticket';
  label?: string;
  maxFileLength?: number;
  maxFileSize?: number;
  onUpdateFile: (file: FileWithPath[]) => void;
  onDeleteFile: (file: FileWithPath) => void;
}

const kilobyte = 1024;
const megaByte = 1024 * 1024;

const FileUpload = ({
  files,
  labelID,
  colorTheme,
  label,
  maxFileLength = 5,
  maxFileSize = 10,
  className,
  onUpdateFile,
  onDeleteFile,
}: FileUploadProps) => {
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<FileWithPath | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[], fileRejections: FileRejection[]) => {
      // 등록파일 개수 체크
      if (files.length + acceptedFiles.length > maxFileLength) {
        setAlertMessage(`최대 ${maxFileLength}개까지 등록 가능합니다.`);
        setAlertDialogOpen(true);
        return;
      }

      // 등록불가 파일 체크
      if (fileRejections.length > 0) {
        setAlertMessage(
          `${maxFileSize}MB 이내의 모든 이미지 및 PDF, TXT, MS office 문서 및 zip파일을 업로드해주세요.`
        );
        setAlertDialogOpen(true);
        return;
      }

      const newFiles = acceptedFiles.slice(0, maxFileLength - files.length);
      onUpdateFile(newFiles);
    },

    [files.length, maxFileLength, maxFileSize, onUpdateFile]
  );

  const onDelete = (fileToDelete: FileWithPath) => {
    onDeleteFile(fileToDelete);
  };

  const handlePreview = (file: FileWithPath) => {
    const isPreviewFileType =
      file.type.startsWith('image/') ||
      file.type === 'application/pdf' ||
      file.type === 'text/plain';

    if (isPreviewFileType) {
      setSelectedFile(file);
      setPreviewModalOpen(true);
    } else {
      // 이미지, PDF, TXT 파일이 아닌 경우 다운로드
      window.open(URL.createObjectURL(file), '_blank');
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxSize: maxFileSize * megaByte,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.svg', '.png', '.ico', '.bmp', '.webp'],
      'application/zip': ['.zip'],
      'application/pdf': ['.pdf'],
      'text/plain': ['.txt'],
      'application/msword': ['.xls', '.xlsx', '.ppt', '.pptx', '.docx'],
    },
  });

  return (
    <FileUploadContainer className={className || ''}>
      {label && <label htmlFor={labelID}>{label}</label>}
      <FileUploadButton {...getRootProps({ className: 'dropzone' })}>
        <span>파일을 등록해 주세요.</span>
        <input id={labelID} {...getInputProps()} />
      </FileUploadButton>
      {files.length > 0 && (
        <ul>
          {files.map(file => (
            <FileItem key={file.name}>
              <div className="inner">
                <button type="button" onClick={() => handlePreview(file)}>
                  <span className="fileInfo">
                    {file.path} ({Math.ceil(file.size / kilobyte)}KB)
                  </span>
                </button>

                <FileDelete onClick={() => onDelete(file)}>
                  <IconClose size={18} color="#000" />
                </FileDelete>
              </div>
            </FileItem>
          ))}
        </ul>
      )}

      {alertMessage && (
        <Portal>
          <AlertDialog
            colorTheme={colorTheme}
            onClose={() => setAlertDialogOpen(false)}
            alertDialogOpen={alertDialogOpen}
          >
            {alertMessage}
          </AlertDialog>
        </Portal>
      )}
      {selectedFile && (
        <LayerPopup
          portalId="portal-preview"
          modalOpen={previewModalOpen}
          content={
            selectedFile.type.startsWith('image/') ? (
              <PreviewImgContainer>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  style={{ maxWidth: '100%' }}
                  alt="파일 프리뷰"
                />
              </PreviewImgContainer>
            ) : (
              <iframe
                src={URL.createObjectURL(selectedFile)}
                width="100%"
                height="90%"
                title="첨부파일"
              />
            )
          }
          mobileShadow={false}
          mobileHeight="full"
          onClose={() => setPreviewModalOpen(false)}
        />
      )}
    </FileUploadContainer>
  );
};

export default FileUpload;

const FileUploadContainer = styled.div`
  label {
    display: block;
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-top: 1.2rem;
  }
`;

const FileUploadButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.2rem 1.6rem;
  border: 0.1rem solid ${COLORS.gray500};
  border-radius: 1.6rem;
  font-size: 1.6rem;
  color: ${COLORS.gray700};
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    background: url('/images/icon_file.svg');
  }
`;

const FileItem = styled.li`
  display: flex;

  .inner {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    max-width: 100%;
    padding: 0.8rem 1.4rem;
    font-size: 1.4rem;
    color: ${COLORS.gray900};
    border-radius: 1.2rem;
    border: 0.1rem solid ${COLORS.gray500};

    .fileInfo {
      position: relative;
      display: block;
      width: 100%;
      padding: 0 1.6rem 0 1.9rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: ${COLORS.gray900};

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        display: inline-block;
        width: 1.6rem;
        height: 1.6rem;
        vertical-align: middle;
        background: url('/images/icon_file_txt.svg');
      }

      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        vertical-align: middle;
        background: url('/images/icon_file_link.svg');
      }
    }
  }
`;

const FileDelete = styled.button`
  display: inline-flex;
  align-items: center;
  width: 4.7rem;

  &::before {
    content: '';
    display: inline-block;
    width: 0.1rem;
    height: 1.2rem;
    background-color: ${COLORS.gray400};
    margin: 0 1.2rem;
  }
`;

const PreviewImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
`;
