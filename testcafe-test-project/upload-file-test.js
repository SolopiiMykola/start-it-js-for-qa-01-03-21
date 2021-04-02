import {Selector} from 'testcafe';
// const suit = fixture;
// suite('Upload file flow');

fixture('File uploading flow')
    .page('https://the-internet.herokuapp.com/upload');

test('User should be able to upload file', async t => {
    // Arrange
    // Act
    // Assert
    await t.click('#file-upload');
    await t.setFilesToUpload('input#file-upload', 'package.json');
    await t.click('#file-submit');
    await t.expect(Selector('#uploaded-files').innerText).eql('package.json');
    await t.wait(5000);
});